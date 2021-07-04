import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  flex: 1;
  height: 100%;
  @media screen and (max-width: 991px) {
    order: 1;
  }
`;

const NewsHeader = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const Title = styled.div`
  margin-left: 2rem;
  padding-bottom: 5px;
  border-bottom: 0.5px solid black;
  font-weight: 600;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const Page = styled.div`
  display: flex;
  justify-content: space-between;
  width: 4rem;
  padding-right: 2rem;
  margin-left: auto;
  @media screen and (max-width: 500px) {
    margin-left: 2rem;
  }
`;

const NewsList = styled.ul`
  padding: 0 2rem;
`;

const NewsItem = styled.li`
  padding: 0.2rem 0;
  a {
    color: #000;
    text-decoration: none;
    &:hover {
      color: #5f5f5f;
    }
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
    this.setState({
      indexOfFirstNews: indexOfFirstNews < 3 ? 0 : indexOfFirstNews - 3,
    });
  }

  handleRightClick() {
    const { indexOfFirstNews } = this.state;
    const { newsArray } = this.props;
    this.setState({
      indexOfFirstNews:
        indexOfFirstNews >= newsArray.length - 3
          ? indexOfFirstNews
          : indexOfFirstNews + 3,
    });
  }

  render() {
    const { cityName, newsArray } = this.props;
    const { indexOfFirstNews } = this.state;
    const currentNewsArray = newsArray.slice(
      indexOfFirstNews,
      indexOfFirstNews + 3
    );
    return (
      <Wrapper>
        <NewsHeader>
          <Title>{`News About ${cityName} Weather`}</Title>
          <Page>
            <button onClick={this.handleLeftClick}>{'<'}</button>
            <button onClick={this.handleRightClick}>{'>'}</button>
          </Page>
        </NewsHeader>
        <NewsList>
          {currentNewsArray.map((news, i) => (
            <NewsItem key={i}>
              <a href={news.url} rel="noopener noreferrer" target="_blank">
                {news.title}
              </a>
            </NewsItem>
          ))}
        </NewsList>
      </Wrapper>
    );
  }
}

export default NewsFeed;
