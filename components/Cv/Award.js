import {
  CVBackground, CVContent, CVList, CVTitle,
} from '../../styles/Cv.style';

export default function Award() {
  return (
    <CVBackground>
      <CVTitle>
        Award & Competition
      </CVTitle>
      <CVContent>
        <CVList>
          <li>
            2021 ACM-ICPC Seoul Regional (<strong>16th</strong>/73 Teams)
          </li>
          <li>
            2020 UCPC, 4th Award (<strong>15th</strong>/169 Teams)
          </li>
          <li>
            2020 Google Codejam IO for Women, Top 150th(Earned Ticket) (<strong>115th</strong>/2500 Participants)
          </li>
          <li>
            2020 Brandi CodenameB, Prize (<strong>11st</strong>/2300 Participants)
          </li>
          <li>
            2018 Nexon Youth Programming Challenge, Finalist (<strong>~Top 50th</strong>/5400 Participants)
          </li>
          <li>
            2017 Korean Olympiad in Informatics, Silver Award (<strong>29th</strong>/200 Participants)
          </li>
        </CVList>
      </CVContent>
    </CVBackground>
  );
}
