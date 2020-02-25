import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Input from 'label-inside-input-react'
import './index.css'
const searchNode = (item, q) => {
  let matches = 0
  let searchableText
  if (typeof item.content === 'object') {
    searchableText = getRecursiveChildText(item.content)
  } else if (typeof item.content === 'string') {
    searchableText = item.content
  }
  searchableText = searchableText.replace('+', '')
  const arrayOfWordsToSearch = searchableText.split(' ')
  const arrayOfQWords = q.trim().split(' ')
  if (!searchableText) {
    throw new Error('Something went wrong with SearchableList...')
  } else {
    arrayOfWordsToSearch.forEach(word => {
      arrayOfQWords.forEach(qWord => {
        if (qWord !== '') {
          if (word.toUpperCase().search(`${qWord.toUpperCase()}`) >= 0) {
            matches++
          }
        } else {
          matches++
        }
      })
    })
    if (item.tags.length > 0) {
      item.tags.forEach(word => {
        arrayOfQWords.forEach(qWord => {
          if (qWord !== '') {
            if (word.toUpperCase().search(`${qWord.toUpperCase()}`) >= 0) {
              matches++
            }
          } else {
            matches++
          }
        })
      })
    }
  }
  return matches >= arrayOfQWords.length
}
const getRecursiveChildText = reactNode => {
  if (Array.isArray(reactNode)) {
    // Multiple children
    let joinedNodes = []
    reactNode.forEach(node => {
      if (typeof node === 'object') joinedNodes.push(getRecursiveChildText(node))
      else if (typeof node === 'string') joinedNodes.push(node)
    })
    return joinedNodes.join(' ')
  }
  if (reactNode.props.children === undefined) {
    // Did not find any text nodes
    if (typeof reactNode === 'string') return reactNode
    else return ' '
  }
  if (typeof reactNode.props.children === 'object') {
    // Found direct child
    return getRecursiveChildText(reactNode.props.children)
  }
  if (typeof reactNode.props.children === 'string') {
    // Found searchable string
    return reactNode.props.children
  }
}
const SearchableList = props => {
  const { list, className, tabIndex } = props
  const [q, setQ] = useState('')
  const onChange = e => {
    let newValue = e.target.value.replace('+', ' ')
    newValue = newValue.replace('\\', ' ')
    setQ(newValue)
  }
  return (
    <div {...props} className={`${className || ''} hu-comp-searchable-list`}>
      <Input
        type="text"
        placeholder="Search"
        value={q}
        onChange={onChange}
        tabIndex={tabIndex || '1'}
      />
      <ul>
        {list.map(item => (
          <React.Fragment key={item.key}>
            {q.trim() === '' || searchNode(item, q) ? (
              <li tabIndex={tabIndex || '1'} data-tags={item.tags}>
                {item.content}
              </li>
            ) : (
              <></>
            )}
          </React.Fragment>
        ))}
      </ul>
    </div>
  )
}
SearchableList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
      tags: PropTypes.arrayOf(PropTypes.string),
      key: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    })
  ),
  tabIndex: PropTypes.string
}
SearchableList.defaultProps = {
  list: [{ content: '', tags: [], key: 'uniqey4hucomplist-default' }],
  tabIndex: '1'
}
export default SearchableList
