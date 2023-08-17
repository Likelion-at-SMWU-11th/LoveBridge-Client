import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import PagePath from '../../ui/PagePath';
import ApplyCard from "../../ui/ApplyCard";
import nolikeIcon from '../../img/nolike.svg';
import { useMediaQuery } from 'react-responsive';
import axios from 'axios';

const Wrapper = styled.div`
  padding: 45px 136px 0px 123px;
`
const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 44vw 34vw;

`;
const NoLike = styled.div`
  text-align: center;
  > img {
    width: 40px;
  }
`
const Txt = styled.div`
  margin-top: 20px;
  color: #454545;
  font-family: Noto Sans KR;
  font-size: 1em;
  font-weight: 400;
`

function MyLikePage() {
  const isDesktop = useMediaQuery({ minWidth: 750 });
  const [likeCards, setLikeCards] = useState([]);
  const [isexist, setisExist] = useState(false);

// useEffect(() => {
//   fetchLikeCards();
// }, []);

// const fetchLikeCards = () => {
//   axios.get('http://127.0.0.1:8000/mypage/mylike/')
//   .then(response => {
//     setLikeCards(response.data);
//     console.log(response.data);
//     for ( var i = 0; i < response.data.length; i++) {
//       likeCards[i] = { 
//             id: response.data[i].id,
//             title: response.data[i].title,
//             district: response.data[i].district,
//             image: response.data[i].image,
//             agency: response.data[i].agency,
//             deadline: '20'+response.data[i].deadline_yy+response.data[i].deadline_mm+response.data[i].deadline_dd,
//             phone: response.data[i].phone,
//             category: response.data[i].category,
//             //applicants: response.data[i].applicants,
//             like: response.data[i].like,
//             iflike: response.data[i].iflike,
//             // userid: card.userid, 
//           };
//     };
//   })
//   .catch(error => {
//     console.error('Error fetching cards: ', error);
//   });
//   console.log(likeCards);
// };

const confirmApply = (e, Id) => {
  var programName = e.target.parentElement.parentElement.children[2].textContent;
  console.log(Id);
  //var Id = e.target
  if (window.confirm(`[${programName}] 정말 신청하시겠습니까?`)) {
    axios.post(`http://127.0.0.1:8000/programs/list/${Id}/`)
    alert(`[${programName}] 신청이 완료되었습니다 `);
  } else {
    alert("취소합니다.");
  }
  
}; // 신청 시 alert

const handleLike = (e, Id, iflike) => {
  console.log(Id, iflike);
  if (iflike === true) {
    console.log("좋아요 삭제");
  } else {
    console.log("좋아요 등록");
  }
}; // 좋아요 handle

  return (
    <>
    {isDesktop? 
    <Wrapper>
      <PagePath pathname1="마이페이지" pathname2="내가 찜한 목록"/>
          {!isexist? 
          <>
          <hr style={{margin: "50px 0px 50px 0px"}}/>
          <NoLike>
            <img src={nolikeIcon}/>
            <Txt>내가 찜한 목록이 없습니다.<br/>관심 있는 프로그램에 좋아요를 눌러 담아보세요.</Txt>
          </NoLike>
          </>
        :
        <CardContainer>
        {likeCards && likeCards.map(card => (
          <div key={card.id} className='card-div'>
            <ApplyCard
              title={card.title}
              agency={card.agency}
              deadline={card.deadline}
              district={card.district}
              phone={card.phone}
              like={card.like}
              iflike={card.iflike}
              tag1={card.category[0]}
              tag2={card.category[1]}
              onClickApply={(e) => confirmApply(e, card.id)}
              onClickLike={(e) => handleLike(e, card.id, card.iflike)}
            />
          </div>
        ))}</CardContainer>}
    </Wrapper>
    :
    <MobileWrapper>
      <PagePath pathname1="마이페이지" pathname2="내가 찜한 목록"/>
          {!isexist? 
          <>
          <hr style={{margin: "50px 0px 50px 0px"}}/>
          <NoLike>
            <img src={nolikeIcon}/>
            <Txt>내가 찜한 목록이 없습니다.<br/>관심 있는 프로그램에 좋아요를 눌러 담아보세요.</Txt>
          </NoLike>
          </>
        :
        <CardContainer>
        {likeCards && likeCards.map(card => (
          <div key={card.id} className='card-div'>
            <ApplyCard
              title={card.title}
              agency={card.agency}
              deadline={card.deadline}
              district={card.district}
              phone={card.phone}
              like={card.like}
              iflike={card.iflike}
              tag1={card.category[0]}
              tag2={card.category[1]}
              onClickApply={(e) => confirmApply(e, card.id)}
              onClickLike={(e) => handleLike(e, card.id, card.iflike)}
            />
          </div>
        ))}</CardContainer>}
    </MobileWrapper>}
    </>
  )
}
const MobileWrapper = styled.div`
  padding: 45px 50px 0px 50px;
`

export default MyLikePage