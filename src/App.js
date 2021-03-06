import React from 'react';
import './App.css';
import data from './data.json';

function App() {
  return (
    <>
      <Header__top />
      <Header__botton />
      <Blog__top />
      <Blog__bottom />
    </>
  );
}

function Header__top() {
  return (
    <>
      <div className="header__top">
        <div className="confix">
          <div className="header__top-left">
            <div className="header__logo">
              <a href="#" className="logo__link">
                <img className="logo-img" src="./images/logo.svg" alt="logo" />
                <img className="blog-logo-img" src="./images/blog.svg" alt="blog" />
                <img className="life-logo-img" src="./images/lifeLogo.svg" alt="lifeLogo" />
              </a>
            </div>

            <div className="header__search">
              <form>
                <div className="search__drop">
                  <div className="selected folded">
                    <span>글</span>
                    <img src="./images/down-arrow.png" alt="down-arrow" />
                  </div>

                  <ul className="select__list">
                    <li className="text active">글</li>
                    <li className="blog">블로그</li>
                    <li className="nickname">별명 아이디</li>
                  </ul>
                </div>

                <div className="search__input">
                  <span></span>
                  <input type="text" />
                </div>

                <div className="search__button">
                  <button>
                    <img src="./images/search-button.png" alt="search_button" />
                  </button>
                </div>
              </form>

              <div className="search__total">
                <a href="#">통합검색</a>
              </div>
            </div>
          </div>
          <div className="header__top-right">
            <div className="header__auth">
              <div className="auth__user">
                <span className="auth__user-icon"></span>
                <span>
                  <span className="auth__user-name">luke</span> ▾
                </span>
              </div>

              <div className="auth__alarm">
                <span className="auth-icon"></span>
              </div>

              <div className="auth__mail">
                <span className="auth-icon"></span>
                <span className="mail-num">99+</span>
              </div>

              <div className="auth__total">
                <span className="auth-icon"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Header__botton() {
  return (
    <>
      <div className="header__bottom">
        <div className="confix">
          <nav>
            <ul>
              <li>
                <a
                  className="active"
                  href="https://section.blog.naver.com/BlogHome.naver?directoryNo=0&currentPage=1&groupId=0">
                  블로그 홈
                </a>
              </li>
              <li>
                <a href="https://section.blog.naver.com/ThemePost.naver?directoryNo=0&activeDirectorySeq=0&currentPage=1">
                  주제별 보기
                </a>
              </li>
              <li>
                <span></span>
              </li>
              <li>
                <a href="https://section.blog.naver.com/ThisMonthDirectory.naver">이달의 블로그</a>
              </li>
              <li>
                <a href="https://section.blog.naver.com/OfficialBlog.naver?currentPage=1">공식블로그</a>
              </li>
              <li>
                <a href="https://section.blog.naver.com/HotTopicChallenge.naver?currentPage=1">챌린지 프로그램</a>
              </li>
            </ul>
          </nav>

          <div className="blog-info-link">
            <ul>
              <li>
                <a href="https://seller.blog.naver.com/market/joinGuide">블로그 마켓 가입</a>
              </li>
              <li>
                <a href="http://item2.naver.com/" target="_blank">
                  아이템 팩토리
                </a>
              </li>
              <li>
                <a href="https://blog.naver.com/blogpeople" target="_blank">
                  블로그팀 공식 블로그
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

function Blog__top() {
  return (
    <>
      <div className="blog-top">
        <div className="confix">
          <div className="hot-topic">
            <div className="hot-topic__select">
              <h2>
                <span className="hot-topic__main-title">핫토픽</span>&nbsp;<span className="hot-topic__arrow"> &gt; </span>
                &nbsp;집밥
              </h2>
              <div className="hot-topic__num">
                <span className="active">1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
              </div>
            </div>

            <div className="hot-topic__list">
              <ul>
                {data.hotTopic.map((hotTopic) => (
                  <li key={hotTopic.id}>
                    <img src={hotTopic.image} alt="hot-topic-rice" />
                    <div className="list__text">
                      <p className="list__text-title">{hotTopic.title}</p>

                      <div className="list__hide-text">
                        <div className="post-icon">
                          <span className="post-icon-img"></span>
                          <span className="post-icon-name">{hotTopic.writer}</span>
                        </div>

                        <p>{hotTopic.contents}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="ad">
            <div className="ad__num">
              <span className="active">1</span>
              <span>2</span>
              <span>3</span>
            </div>

            <div className="ad__img">
              <a href="https://blog.naver.com/blogpeople/222599846369" target="_blank">
                <img src="./images/ad-1.jpg" alt="ad1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Blog__bottom() {
  return (
    <>
      <div className="blog-bottom">
        <div className="confix">
          <div className="neighbor-post">
            <div className="neighbor-filter__top">
              <h2>이웃새글</h2>
              <ul className="neighbor-select">
                <li>
                  <span>전체이웃</span>
                  <span>
                    <i className="fas fa-chevron-down"></i>
                  </span>
                </li>
              </ul>
            </div>

            <div className="neighbor-filter__bottom">
              <ul className="neighbor-select">
                <li>
                  <span>
                    내 이웃 <span className="neighbor-name">돌</span>님의 이웃을 만나보세요.
                  </span>
                  <span>
                    <i className="fas fa-chevron-down"></i>
                  </span>
                </li>
              </ul>
            </div>

            <ul className="post-list">
              {data.postContents.map((post) => (
                <li key={post.id}>
                  <div className="neighbor-post__text">
                    <div className="user">
                      <div className="user-img"></div>

                      <div className="user-post-info">
                        <span className="user-name">돌</span>
                        <span className="post-time">{post.postTime}</span>
                      </div>
                    </div>

                    <div className="post-contents">
                      <h3>{post.title}</h3>
                      <p>{post.contents}</p>

                      <div className="comment">
                        <div className="comment-left">
                          <div className="comment__heart">
                            <div className="heart-img"></div>
                            <span>공감해요</span>
                            <span className="comment__heart-num">4</span>
                          </div>

                          <div className="comment__comment">
                            <div className="comment-img">
                              <i className="fas fa-comment-dots"></i>
                            </div>
                            <span className="comment__comment-num">0</span>
                          </div>
                        </div>

                        <div className="comment-right">
                          <div className="comment__share">
                            <i className="far fa-share-square"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="neighbor-post__img">
                    <img src={post.image} alt="post-img" />
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="my-blog">
            <div className="user-info">
              <div className="user-icon"></div>

              <div className="user-id-visit">
                <div className="user-id">
                  <span>gathering11</span>
                </div>

                <div className="user-visit">
                  <span>
                    오늘 <span className="visit-num">0</span>명 방문 &gt;
                  </span>
                </div>
              </div>

              <div className="log-out">
                <button>로그아웃</button>
              </div>
            </div>

            <div className="my-blog__link">
              <button className="blog-button">내 블로그</button>
              <button className="write-button">
                <span className="write-icon">
                  <i className="fas fa-pen"></i>
                </span>
                글쓰기
              </button>
            </div>

            <div className="my-blog__list">
              <ul className="list-title">
                <li className="active">
                  <h4>내 소식</h4>
                </li>
                <li>
                  <h4>내 활동</h4>
                </li>
                <li>
                  <h4>이웃 목록</h4>
                </li>
              </ul>

              <ul className="list-contents">
                <li className="show">
                  <span>새로운 소식이 없습니다.</span>
                </li>
                <li>
                  <span>새로운 소식이 없습니다.</span>
                </li>
                <li>
                  <span>새로운 소식이 없습니다.</span>
                </li>
              </ul>
            </div>

            <div className="from-blog">
              <div className="from-blog-text">
                <span>From, 블로그씨</span>
                <p>
                  블로그씨는 곧 있을 크리스마스를 위해 미니 트리를 만들었어요~ 내가 만든 소품 DIY를 사진과 함께 공유해
                  주세요!
                </p>
              </div>

              <div className="from-blog-bottom">
                <div className="question">
                  <span>질문에 답하기 &gt;</span>
                </div>

                <div className="setting">
                  <i className="fas fa-cog"></i>
                </div>
              </div>
            </div>

            <div className="move-btn">
              <span>&lt;</span>
              <span>&gt;</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
