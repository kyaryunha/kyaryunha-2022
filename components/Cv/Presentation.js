import {
  CVBackground,
  CVContent,
  CVDate,
  CVList,
  CVMetas,
  CVRoleDate,
  CVSubTitle,
  CVSubTitleCover,
  CVTitle,
  KyaA
} from "../../styles/Cv.style";
import {IconLink} from "../../icons/util.icon";
import {kyaColor} from "../../styles/Layout.style";
export default function Presentation () {
  return (
    <CVBackground>
      <CVTitle>
        Presentation
      </CVTitle>
      <CVContent>
        <CVSubTitleCover>
          <CVSubTitle text='TeX Book Design Using memoir and expl3: Page Styles and Title'/>
          <CVMetas>
            <CVDate date='Nov. 2019' />
          </CVMetas>
        </CVSubTitleCover>
        <CVList>
          <li>
            Participated in The Korean TeX Society’s 2019 group study
          </li>
          <li>
            <KyaA href='http://wiki.ktug.org/wiki/wiki.php/LaTeXWorkshop/2019' color={kyaColor.yellow} target='_blank'>
              http://wiki.ktug.org/wiki/wiki.php/LaTeXWorkshop/2019 <IconLink />
            </KyaA>
          </li>
        </CVList>
      </CVContent>
    </CVBackground>
  )
}
