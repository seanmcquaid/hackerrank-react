import React from 'react';

class Articles extends React.Component {
  state = {
    articles: [],
    totalPages: 0,
  };

  componentDidMount = () => {
    this.getArticlesForPageNumber(1);
  };

  getArticlesForPageNumber = async (pageNumber) => {
    const response = await fetch(
      `https://jsonmock.hackerrank.com/api/articles?page=${pageNumber}`
    );
    const data = await response.json();

    this.setState({
      ...this.state,
      articles: data.data.filter(
        (article) => article.title !== null && article.title !== ''
      ),
      totalPages: data.total_pages,
    });
  };

  currentPageOnClick = async (pageNumber) => {
    await this.getArticlesForPageNumber(pageNumber);
  };

  render() {
    let buttons = [];

    for (let i = 1; i <= this.state.totalPages; i++) {
      let button = (
        <button
          data-testid='page-button'
          key={`page-button-${i}`}
          onClick={() => this.currentPageOnClick(i)}
        >
          {i}
        </button>
      );
      buttons.push(button);
    }
    return (
      <React.Fragment>
        <div className='pagination'>{buttons}</div>
        <ul className='results'>
          {this.state.articles.map((article, i) => (
            <li key={`title-${i}`} data-testid='result-row'>
              {article.title}
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default Articles;
