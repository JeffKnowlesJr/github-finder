import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const validateUrl = (value) => {
  return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
    value
  )
}

const RepoItem = ({ repo }) => {
  return (
    <div className="card">
      <h3>
        <a href={repo.html_url}>{repo.name}</a>
        {repo.description != null && (
          <Fragment>
            {' - '}
            <span style={{ fontSize: '.8em', fontWeight: '500' }}>
              {repo.description}
            </span>
          </Fragment>
        )}
        {validateUrl(repo.homepage) && (
          <Fragment>
            <span style={{ fontSize: '.8em', fontWeight: '500' }}>{' ('}</span>
            <span style={{ fontSize: '.8em', fontWeight: '600' }}>
              {'url: '}
            </span>

            <a
              style={{ fontSize: '.8em', fontWeight: '500' }}
              href={repo.homepage}
            >
              {repo.homepage}
            </a>
            <span style={{ fontSize: '.8em', fontWeight: '500' }}>{')'}</span>
          </Fragment>
        )}
      </h3>
    </div>
  )
}

RepoItem.propTypes = { repo: PropTypes.object.isRequired }
export default RepoItem
