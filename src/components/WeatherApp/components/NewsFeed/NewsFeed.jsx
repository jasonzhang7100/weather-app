import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 55%;
  height: 10rem;
  background-color: #b2d7dd;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

class NewsFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = { indexOfFirstNews: 0 };
    this.handleLeftClick = this.handleLeftClick.bind(this);
    this.handleRightClick = this.handleRightClick.bind(this);
  }

  handleLeftClick() {
    const { indexOfFirstNews } = this.state;
    this.setState({ indexOfFirstNews: indexOfFirstNews < 3 ? 0 : indexOfFirstNews - 3 });
  }

  handleRightClick() {
    const { indexOfFirstNews } = this.state;
    const { totalNews } = this.props;
    this.setState({
      indexOfFirstNews: indexOfFirstNews > totalNews - 3
        ? indexOfFirstNews
        : indexOfFirstNews + 3,
    });
  }

  render() {
    const { cityName, newsArray } = this.props;
    const { indexOfFirstNews } = this.state;
    // eslint-disable-next-line react/prop-types
    const currentNewsArray = newsArray.slice(indexOfFirstNews, indexOfFirstNews + 3);
    return (
      <Wrapper>
        <div>
          {`${cityName} weather news`}
        </div>
        <button type="button" onClick={this.handleLeftClick}>previous</button>
        <button type="button" onClick={this.handleRightClick}>next</button>
        <ul>
          {currentNewsArray.map((news, i) => (
          // eslint-disable-next-line react/no-array-index-key
            <li key={i}>
              <span>{news.source.name}</span>
              <a href={news.url}>{news.title}</a>
            </li>
          ))}
        </ul>
      </Wrapper>
    );
  }
}

export default NewsFeed;
