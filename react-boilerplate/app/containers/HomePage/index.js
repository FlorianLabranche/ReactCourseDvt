/**
 *
 * HomePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectHomePage from './selectors';
import reducer from './reducer';
import saga from './saga';
import {selectNewsData} from './selectors';
import {newsApiRequest} from './actions';
import ItemNews from 'components/ItemNews';


export class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  ArticlesList(){
    const articles = [...this.props.newsData];
    const listItems = articles.map((item,index) =>
      <ItemNews key={index} title={item.title} desc={item.description} img={item.urlToImage} articleLink= {item.url}/>
    );
    return <div>{listItems}</div>
  }
  
  componentWillMount(){
    this.props.newsRequest();
  }

<<<<<<< HEAD
  getArticle = () => {
    const articles = [...this.props.newsData];
    articles.forEach(function(element) {
    });
  }
=======
>>>>>>> c94b1e809a43bbaebe65d3a03f7f0636cdfd9785
  
  render() {
    return (
      <div>
        <Helmet>
          <title>HomePage</title>
          <meta name="description" content="Description of HomePage" />
        </Helmet>
          {this.ArticlesList()}
      </div>
    );
  }
}

HomePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  homepage: makeSelectHomePage(),
  newsData: selectNewsData()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    newsRequest : () => dispatch(newsApiRequest())
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'homePage', reducer });
const withSaga = injectSaga({ key: 'homePage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
