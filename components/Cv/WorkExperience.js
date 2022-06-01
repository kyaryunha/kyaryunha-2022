import { CVBackground, CVContent, CVList, CVMetas, CVRoleDate, CVSubTitle, CVSubTitleCover, CVTitle } from  "../../styles/Cv.style";
export default function WorkExperience () {
  return (
    <CVBackground>
      <CVTitle>
        Work Experience
      </CVTitle>
      <CVContent>
        <CVSubTitleCover>
          <CVSubTitle text='EmoticBox'/>
          <CVMetas>
            <CVRoleDate role='Full Time' date='Jul 19, 2021 - Feb 28, 2022' />
          </CVMetas>
        </CVSubTitleCover>
        <CVList>
          <li>
            Express, Sequelize, MySQL, Mocha, Jira & Confluence, Docker, AWS (Code Pipeline, Code Build, ECS, ECR, LB ... ), Code Review & CI/CD
          </li>
        </CVList>
      </CVContent>
      <CVContent>
        <CVSubTitleCover>
          <CVSubTitle text='Aria-Edge'/>
          <CVMetas>
            <CVRoleDate role='Intern' date='Apr 8, 2020 - Jun 12, 2020' />
            <CVRoleDate role='Contract' date='Jan 19, 2021 - Jun. 18, 2021' />
          </CVMetas>
        </CVSubTitleCover>
        <CVList>
          <li>
            React, Next.js, Emotion, SWR, Canvas, WebRTC, Express, Sequelize, Socket.IO, Swagger, MySQL
          </li>
        </CVList>
      </CVContent>
      <CVContent>
        <CVSubTitleCover>
          <CVSubTitle text='Naver Clova'/>
          <CVMetas>
            <CVRoleDate role='Intern' date='Jun 29, 2020 - Dec 18, 2020' />
          </CVMetas>
        </CVSubTitleCover>
        <CVList>
          <li>
            HTML5, SCSS, Javascript, Canvas, Gulp, Flask, Python, BeautifulSoup, Selenium
          </li>
        </CVList>
      </CVContent>
      <CVContent>
        <CVSubTitleCover>
          <CVSubTitle text='7meerkat'/>
          <CVMetas>
            <CVRoleDate role='Intern' date='Jan 6, 2020 - Mar 15, 2020'/>
          </CVMetas>
        </CVSubTitleCover>
        <CVList>
          <li>
            HTML5, CSS3, JavaScript, Canvas, Python, Flask, AWS S3, MongoDB, OpenCV
          </li>
        </CVList>
      </CVContent>
      <CVContent>
        <CVSubTitleCover>
          <CVSubTitle text='Software Maestro 10th'/>
          <CVMetas>
            <CVRoleDate role='Mentee' date='Jun 2019 - Dec 2019'/>
          </CVMetas>
        </CVSubTitleCover>
        <CVList>
          <li>
            OpenCV, Object Detection, Jetson Nano
          </li>
        </CVList>
      </CVContent>
    </CVBackground>
  )
}
