import styled from '@emotion/styled'
import { kyaColor, KyaTag, KyaTags } from '../styles/Cv.style'

export default function Introduce () {
  return (
    <IntroduceCover>
      <IntroduceText>
        <IntroduceTitle>
          Shin Hyun (신 현)
        </IntroduceTitle>
        <KyaTags>
          {['Algorithm', 'FrontEnd', 'BackEnd'].map((name) => (
            <KyaTag backgroundColor={kyaColor.yellow} key={name}>
              {name}
            </KyaTag>
          ))}
        </KyaTags>
        I'm Computer Software undergraduate student at Hanyang University. <br />
        {/*Now, I worked as a Backend Engineer at EmoticBox. <br />*/}
      </IntroduceText>
      <IntroduceImage src="me.jpg" alt="my picture" />
    </IntroduceCover>
  )
}

const IntroduceCover = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0;
  padding: 0;
`;
const IntroduceText = styled.div`
  display: inline-block;
  line-height: 3vw;
  width: 45vw;
  font-size: 1.2vw;
`;
const IntroduceTitle = styled.div`
  font-weight: bold;
  margin-bottom: 2vw;
  font-size: 1.5vw;
`;

const IntroduceImage = styled.img`
  display: inline-block;
  width: 20vw;
  border-radius: 10px;
`;
