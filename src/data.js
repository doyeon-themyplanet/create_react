import { useState } from 'react';

export function Hot_topic_writer(i) {
  let [writer, writer_change] = useState(['부자엄마', '수동샘', '아브']);

  return writer[i];
}

export function Hot_topic_title(i) {
  let [title, title_change] = useState([
    '4인 가족 식비 절약 집밥 기록~',
    '애호박 무 넣은 된장찌개 끓이기',
    '나의 자취 집밥 기록~'
  ]);

  return title[i];
}

export function Hot_topic_contents(i) {
  let [contents, contents_change] = useState([
    '요즘 한 주 한 주 집밥 기록을 하고 있다. 일주일 동안 뭘 먹었는지 확인하고 영양적으로 식비 쪽으로 부족하거나 과한 건 없는지...',
    '돌솥비빔밥과 매콤소고기뭇국 햄 감자볶음, 감자조림, 메추리알 장조림 우리 부부는 햄을 안 좋아하는데 명절에 들어온 햄 처리용...',
    '#집밥기록 나의 집밥 기록 단배추 된장 비빔밥과 진미채무침, 그리고 단백질 보충용 삶은 달걀 단배추 된장 비빔밥은 정말 맛...'
  ]);

  return contents[i];
}

export function Post_contents_title(i) {
  let [title, title_change] = useState(['눈이 내리는 밤', '리액트 ES6 화살표 함수']);

  return title[i];
}

export function Post_contents(i) {
  let [contents, contents_change] = useState([
    '서울에서 내려와 세종에 도착 버스에 내렸을 때 눈이 내리고 있었다. 눈 내리는 밤 도로가에 눈이 소복소복 쌓여간다. 그리고 다음날 아이들과 눈 사람 만들기',
    '화살표 함수 (arrow function)이라고 한다. ES6 추가된 표현식을 사용하는 함수로 화살표 기호 => 이 소스는 책에서 Github에 있는 소스 위 소스 중 대표적인 화살표 함수 위 화살표 함수 표현식이 이 것과 같다. 훨씬 간결하고 편하게 쓰여지는 ES6 문법의 화살표 함수'
  ]);

  return contents[i];
}
