import {
  CVBackground,
  CVContent,
  CVList,
  CVTitle,
} from "../../styles/Cv.style";
import {IconLink} from "../../icons/util.icon";
import {kyaColor} from "../../styles/Layout.style";
import {KyaA} from "../../styles/Page.style";

export default function Contact() {
  return (
    <>
      <CVBackground>
        <CVTitle>
          Contact & Link
        </CVTitle>
        <CVContent>
          <CVList>
            <li>
              Email - kyaryunha@naver.com
            </li>
            <li>
              CV (2021.12) - <KyaA href='https://hanyang-univ.s3.ap-northeast-2.amazonaws.com/Shin_Hyun_CV_2021_12.pdf' color={kyaColor.yellow} target='_blank'>CV<IconLink /></KyaA>
            </li>
            <li>
              Github - <KyaA href='http://github.com/kyaryunha' color={kyaColor.yellow} target='_blank'>kyaryunha<IconLink /></KyaA>
            </li>
            <li>
              Solved.ac (Algorithm) - <KyaA href='https://solved.ac/profile/kyaryunha_cpp' color={kyaColor.yellow} target='_blank'>kyaryunha_cpp<IconLink /> </KyaA>
            </li>
          </CVList>
        </CVContent>
      </CVBackground>
    </>
  )
}
