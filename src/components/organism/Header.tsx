const Header = () => {
  return (
    <div className="fixed px-3 left-0 top-0 w-64 h-full bg-black z-10">
      <nav>
        <ul>
          <li className="active">
            <a href="/">웹스토리보이</a>
          </li>
          <li className="active">
            <a href="/">추천 영상</a>
          </li>
          <li className="active">
            <a href="/">추천 개발자</a>
          </li>
          <li className="active">
            <a href="/">웹디자인기능사</a>
          </li>
          <li className="active">
            <a href="/">웹표준 사이트</a>
          </li>
          <li className="active">
            <a href="/">GSAP Parallax</a>
          </li>
          <li className="active">
            <a href="/">포트폴리오 사이트</a>
          </li>
          <li className="active">
            <a href="/">유튜브 클론 사이트</a>
          </li>
        </ul>
      </nav>

      {/* 키워드 */}
      <nav>
        <ul>
          <li>
            <a href="/search/webstoryboy">웹스토리보이</a>
          </li>
          <li>
            <a href="/search/html">HTML</a>
          </li>
          <li>
            <a href="/search/css">CSS</a>
          </li>
          <li>
            <a href="/search/javascript">JavaScript</a>
          </li>
          <li>
            <a href="/search/react.js">React.js</a>
          </li>
          <li>
            <a href="/search/vue.js">Vue.js</a>
          </li>
          <li>
            <a href="/search/next.js">Next.js</a>
          </li>
          <li>
            <a href="/search/node.js">Node.js</a>
          </li>
          <li>
            <a href="/search/sql">SQL</a>
          </li>
          <li>
            <a href="/search/portfolio">Portfolio</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
