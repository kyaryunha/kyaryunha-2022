import {
  CVBackground, CVContent, CVDate, CVList, CVMetas, CVSubTitle, CVSubTitleCover, CVTitle,
} from '../../styles/Cv.style';

export default function SchoolActivity() {
  return (
    <CVBackground>
      <CVTitle>
        School Activity
      </CVTitle>
      <CVContent>
        <CVSubTitleCover>
          <CVSubTitle text="Hanyang University" />
          <CVMetas>
            <CVDate date="Mar. 2019 - PRESENT" />
          </CVMetas>
        </CVSubTitleCover>
        <CVList>
          <li>
            Bachelor of Computer Software
          </li>
          <li>
            Barami (Engineering Club) Vice President(2020)
          </li>
        </CVList>
      </CVContent>

      <CVContent>
        <CVSubTitleCover>
          <CVSubTitle text="Chungbuk Science High School" />
          <CVMetas>
            <CVDate date="2016 - 2018" />
          </CVMetas>
        </CVSubTitleCover>
        <CVList>
          <li>
            EXE (Computer Club) President (2018)
          </li>
        </CVList>
      </CVContent>

      <CVContent>
        <CVSubTitleCover>
          <CVSubTitle text="Barami" />
          <CVMetas>
            <CVDate date="Mar. 2019 - PRESENT" />
          </CVMetas>
        </CVSubTitleCover>
        <CVList>
          {/* <li> */}
          {/*  An academic club in Hanyang Univ’s College of Engineering */}
          {/* </li> */}
          <li>
            Holds a work exhibition every November
          </li>
          <li>
            Set up the 2021 exhibition jekyll blog site https://hyu-barami.github.io/
          </li>
          <li>
            Lectured at C++ & Algorithm Seminar
          </li>
        </CVList>
      </CVContent>
    </CVBackground>
  );
}
