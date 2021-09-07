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
      </h3>
    </div>
  )
}

RepoItem.propTypes = { repo: PropTypes.object.isRequired }
export default RepoItem
