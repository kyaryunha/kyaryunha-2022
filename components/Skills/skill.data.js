export const FRONT_END = {
    name: "Front End",
    ALL: {
        name: '',
        contents: [
            {
                content: "프론트엔드는 상상한 것을 구체화하여 구현합니다.",
            },
        ]
    },
    HTML_CSS_JS: {
        name: "HTML, (S)CSS, Javascript",
        contents: [
            {
                content: "Media Query 를 이용해 반응형 웹을 개발 해본 적 있습니다",
                types: ["personal", "company"]
            },
            {
                content: "Javascript 로 다양한 인터랙티브한 작업을 개발 해본 적 있습니다",
                types: ["personal", "company"]
            },
            {
                content: "벡엔드에 REST API 로 데이터 요청을 해 개발을 해본 적 있습니다",
                types: ["company"]
            },
            {
                content: "PSD 디자인 시안을 받아, 마크업 해본 적 있습니다",
                types: ["company"]
            },
            {
                content: "i18n을 지원해 본 적 있습니다",
                types: ["personal", "company"]
            },
            {
                content: "브라우저 호환성을 고민해 개발을 해본 적 있습니다",
                types: ["personal", "company"]
            },
            {
                content: "jQuery, Javascript 가 혼재된 레거시 파일을 Javascript 로 리팩토링 한 적 있습니다",
                types: ["company"]
            },
            {
                content: "SCSS 를 컴파일해 나온 CSS 결과물을 수정하던 레거시 파일을, SCSS 로 리팩토링 한 적 있습니다",
                types: ["company"]
            }
        ]
    },
    REACT: {
        name: 'React',
        contents: [
            {
                content: "상단의 HTML, CSS, JS 항목에 적혀있는 작업은 Nextjs 로도 할 수 있습니다"
            },
            {
                content: "Nextjs, SWR, Emotion 로 개발을 해본 적 있습니다",
                types: ["personal", "company"]
            },
            {
                content: "Nextra 를 이용해 외부용 API Docs 를 작성한 적 있습니다",
                types: ["company"]
            },
        ]
    },
    CANVAS: {
        name: 'Canvas',
        contents: [
            {
                content: "마우스 클릭 및 우클릭을 통해, 데이터를 그리거나 수정하거나 삭제하거나 하이라이트하는 사이트를 만든 적 있습니다",
                types: ["personal", "company"]
            },
            {
                content: "이미지, 비디오 데이터에 대한 사각형, 다각형, 타임라인 등으로 데이터를 라벨링하는 사이트를 만든 적 있습니다",
                types: ["company"]
            },
            {
                content: "Canvas 의 최대 픽셀이 제한되어 있는 문제를 접해, 여러 Canvas 를 이어붙여 하나의 Canvas 처럼 작동하게 하여 해결해본 적 있습니다",
                types: ["company"]
            },
            {
                content: "API 를 통해 가져온 데이터를 chartjs 를 이용해 시각화를 해본 적 있습니다",
                types: ["company"]
            }
        ]
    },
    OPS: {
        name: "Ops",
        contents: [
            {
                content: "CI/CD 를 한 적 있습니다",
                types: ["personal", "company"]
            },
            {
                content: "AWS S3 로 정적인 배포를 한 적 있습니다",
                types: ["personal", "company"]
            },
            {
                content: "Vercel 로 배포를 한 적 있습니다",
                types: ["personal"]
            },
            {
                content: "Github Pages 를 이용해 배포를 해본 적 있습니다",
                types: ["personal"]
            },
            {
                content: "Gabia 나 Route 53를 이용해 도메인 연결을 한 적 있습니다",
                types: ["personal", "company"]
            },
            {
                content: "AWS (Code Pipeline, Code Build, ECS, ECR, ...) 으로 배포를 해본 적 있습니다",
                types: ["company"]
            },
        ]
    },
    OTHERS: {
        name: 'Others',
        contents: [
            {
                content: "jekyll template 를 이용해, 필요에 맞게 커스터마이즈 한 적 있습니다 ",
                types: ["team"]
            },
            {
                content: "Socket.IO 를 사용해 실시간 채팅 기능을 만든 적 있습니다",
                types: ["personal", "company"]
            },
            {
                content: "simple-peer(webrtc) 를 이용해 화상회의 시스템을 (실제 배포는 해보지 않은) 프로토타입 수준으로 만든 적 있습니다",
                types: ["company"]
            },
        ]
    }
};

export const BACK_END = {
    name: "Back End",
    ALL: {
        name: '',
        contents: [
            {
                content: "벡엔드는 필수적으로 테스트 코드를 작성해야 한다고 생각합니다",
            },
            {
                content: "프론트엔드 서버와 벡엔드 서버는 나뉘어져 있어야 한다고 생각합니다",
            },
        ]
    },
    EXPRESS: {
        name: 'Express',
        contents: [
            {
                content: "Express 로 API 서버를 만든 적 있습니다",
                types: ["personal", "company"]
            },
            {
                content: "Router-Service-Controller 구조로 보일러플레이트를 만든 적 있습니다",
                types: ["personal"]

            },
            {
                content: "Router-Service-Controller 구조로 기존 코드를 리팩토링 한 적 있습니다",
                types: ["company"],
            },
            {
                content: "passport 를 이용해 session 혹은 jwt auth 기능이 있는 사이트를 만들 수 있습니다",
                types: ["personal", "company"],
            },
            {
                content: "Sequelize 를 이용해 MySQL, MongoDB 를 사용해본 적 있습니다",
                types: ["personal", "company"],
            },
            {
                content: "Sequelize 를 이용해 Index 를 건 적 있습니다",
                types: ["company"],
            },
            {
                content: "Sequelize 를 이용해 table, column 을 추가하거나 제거하는 migration 을 해본 적 있습니다",
                types: ["company"],
            },
            {
                content: "Swagger 를 사용해 API Docs 를 만들 수 있습니다",
                types: ["company"],
            },
            {
                content: "mocha, jest, supertest 를 이용해 테스트 코드를 작성 해본 적 있습니다",
                types: ["personal", "company"],
            },
            {
                content: "Socket.IO 를 사용해 실시간 채팅 기능을 만들 수 있습니다",
                types: ["personal", "company"],
            }
        ]
    },
    FLASK: {
        name: 'Flask',
        contents: [
            {
                content: "session 을 이용해 auth 기능을 구현 해본 적 있습니다",
                types: ["company"],
            },
            {
                content: "boto3 를 이용해 s3에서 데이터를 가져오거나 업로드를 해본 적 있습니다",
                types: ["company"],
            },
            {
                content: "PyMySQL 을 이용해 MySQL 를 사용 해본 적 있습니다",
                types: ["company"],
            },
        ]
    },
    OPS: {
        name: 'Ops',
        contents: [
            {
                content: "AWS Lightsail, AWS EC2로 배포를 해본 적 있습니다",
                types: ["personal"],
            },
        ]
    }
};

export const PYTHON = {
    name: "Python",
    SELENIUM: {
        name: 'Selenium',
        contents: [
            {
                content: "사이트에서 비디오 파일을 다운 받는 크롤링 코드를 작성한 적 있습니다",
                types: ["company"],
            },
            {
                content: "사이트에서 자막 파일을 다운 받는 크롤링 코드를 작성한 적 있습니다",
                types: ["company"],
            },
        ]
    },
    OPENCV: {
        name: 'OpenCV',
        contents: [
            {
                content: "마우스 클릭을 통해 푸는 이미지 퍼즐을 만든 적 있습니다",
                types: ["team"],
            },
            {
                content: "OpenCV 내장 API 를 이용해 Object Tracking 을 해본 적 있습니다",
                types: ["company"],
            },
        ]
    },
    OBJECT_DETECTION: {
        name: 'Object Detection',
        contents: [
            {
                content: "데이터를 수집해 라벨링 후, Tensorflow 의 MobilenetSSD 오픈소스로 훈련해 Jetson Nano 에서 추론해본 적 있습니다",
                types: ["team"],
            },
            {
                content: "수집된 데이터로, Keras RetinaNet 오픈소스를 이용해 훈련 및 추론해 본 적 있습니다",
                types: ["company"],
            }
        ]
    }
};


export const OTHERS = {
    name: "Others",
    GIT: {
        name: 'Git',
        contents: [
            {
                content: "add, commit, push, checkout 등을 사용하여, 커밋규칙, 브랜치 규칙에 따라 개발 해본 적 있습니다",
                types: ["personal", "team", "company"],
            },
            {
                content: "cherry-pick, filter-branch 를 사용해본 적 있습니다",
                types: ["personal", "company"],
            },
            {
                content: "Github Pages, Actions 를 사용해본 적 있습니다",
                types: ["personal", "team"],
            },
            {
                content: "Pull Request 를 보내고, Code Review 를 통과해야 Merge 를 하게 설정해본 적 있습니다",
                types: ["team"],
            },
            {
                content: "Pull Request 를 보내고, Code Build 를 통과하면 Code Review 후 Merge 하는 팀에서 일했습니다",
                types: ["company"],
            },
        ]
    },
    COMMUNICATION: {
        name: 'Communication',
        contents: [
            {
                content: "Jira & Confluence 를 이용해 API Document 작성 및 일정 관리를 해본 적 있습니다",
                types: ["company"],
            },
            {
                content: "Slack, Discord, Notion 을 사용해본 적 있습니다",
                types: ["personal", "team", "company"],
            },
        ]
    }
};

export const ALGORITHM = {
    name: "Algorithm",
    ALL: {
        name: '',
        contents: [
            {
                content: "얼마나 많은 알고리즘을 아느냐보단 기초 알고리즘 활용을 잘해야하는 것이 중요하다 믿습니다",
            },
            {
                content: "대회에선 단순히 알고리즘을 안다고 풀 수 있는 문제가 나오는 경우는 거의 없습니다",
            },
            {
                content: "새로운 알고리즘을 공부하는 것 역시 좋아해, 아래와 같은 다양한 알고리즘을 문제를 풀어보며 공부했습니다.",
            },
        ]
    },
    Graph: {
        name: 'Graph',
        contents: [
            {
                content: "Flood Fill, Topological Sort, Articulation Point and Line, SCC, Eulerian Path",
            },
            {
                content: "Spanning Tree, Undirected MST(Kruskal, Prim), Dijkstra, Bellman Ford, Floyd Warshall, SPFA",
            },
            {
                content: "Flow, Bipartite Matching, MCMF, Min Cut",
            }
        ]
    },
    TREE: {
        name: 'Tree',
        contents: [
            {
                content: "Union Find Tree, Segment Tree, Fenwick Tree, Merge Sort Tree, LCA",
            },
            {
                content: "Lazy Propagation, Mo, Sqrt Decomposition, Euler Tour Technique",
            }
        ]
    },
    Math: {
        name: 'Math & Geometry',
        contents: [
            {
                content: "Heuristics(Simulated Annealing), Inclusion And Exclusion, 2-sat, Floyd Tortoise and Hare, Newton Raphson",
            },
            {
                content: "CCW, Convex Hull(Graham, Monotone), Line Intersection, Polygon Area, Point In Convex Polygon, Min Enclosing Circle",
            }
        ]
    },
};
