// ----------------------------------------------------------------------------
// Original Creator: Redux
// File Developer: Peter Pak
// Description: Component for subreddit list
// ----------------------------------------------------------------------------

// Module Imports -------------------------------------------------------------
import React from 'react';
import PropTypes from 'prop-types'
// ----------------------------------------------------------------------------

// Component Import -----------------------------------------------------------
import SubredditButton from '../SubredditButton'
// ----------------------------------------------------------------------------

// Todo List Component --------------------------------------------------------
const SubredditList = ({ subreddits, toggleSubreddit }) => (
  <ul className = "list-inline">
    {subreddits.map(subreddit =>
      <SubredditButton
        key={subreddit.id}
        {...subreddit}
        onClick={() => toggleSubreddit(subreddit.id)}                           // Reference to toggle subreddit action
      />
    )}
  </ul>
)
// ----------------------------------------------------------------------------

// PropTypes ------------------------------------------------------------------
SubredditList.propTypes = {
  subreddits: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      viewing: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleSubreddit: PropTypes.func.isRequired                                    // Requires prop type for toggle subreddit action
}
// ----------------------------------------------------------------------------

// Component Export -----------------------------------------------------------
export default SubredditList
// ----------------------------------------------------------------------------
