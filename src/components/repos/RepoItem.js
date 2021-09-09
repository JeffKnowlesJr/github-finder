import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

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
        {repo.homepage != null && (
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
