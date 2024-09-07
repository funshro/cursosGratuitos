// Criação de objetos - uma lista
let cursos = [
        {
            instituicao: "Alura",
            cursosGratuitos: "Introdução ao HTML JavaScript para Iniciantes",
            duracaoEstimada: "4-8 semanas",
            cargaHorariaTotal: "60 horas",
            ritmoEstudo: "Flexível",
            formato: "Autodidata",
            numeroModulos: 10,
            preRequisitos: "Nenhum",
            nivelDificuldade: "Iniciante",
            reconhecimento: "Líder em cursos online de programação e desenvolvimento web no Brasil.",
            link: "https://www.alura.com.br/?utm_term=alura&utm_campaign=%5BSearch%5D+%5BPerformance%5D+-+Institucional&utm_source=adwords&utm_medium=ppc&hsa_acc=7964138385&hsa_cam=386166608&hsa_grp=21666755648&hsa_ad=696280649243&hsa_src=g&hsa_tgt=kwd-300088401&hsa_kw=alura&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=Cj0KCQjw8--2BhCHARIsAF_w1gyyP8RoZZc8ToVPOVg77WCd7y613ANdOmNO-po-R8S0X560NrqCm90aArZKEALw_wcB"
        },
        {
            instituicao: "Coursera",
            cursosGratuitos: "Ciência da Computação, Marketing Digital, Design Gráfico,  Inteligência Artificial",
            duracaoEstimada: "Varia de acordo com o curso",
            cargaHorariaTotal: "Varia",
            ritmoEstudo: "Flexível",
            formato: "Autodidata com tutoria",
            numeroModulos: "Varia",
            preRequisitos: "Conhecimento básico em inglês",
            nivelDificuldade: "Varia",
            reconhecimento: "Plataforma global com parcerias com universidades de renome mundial.",
            link: "https://www.coursera.org/courses?query=free"
        },
        {
            instituicao: "edX",
            cursosGratuitos: "Cursos universitários de diversas áreas, Cursos profissionalizantes",
            duracaoEstimada: "8-12 semanas",
            cargaHorariaTotal: "Varia",
            ritmoEstudo: "Flexível",
            formato: "Autodidata com tutoria",
            numeroModulos: "Varia",
            preRequisitos: "Conhecimento básico em inglês",
            nivelDificuldade: "Varia",
            reconhecimento: "Plataforma de cursos online criada por Harvard e MIT, oferecendo cursos de diversas universidades do mundo.",
            link: "https://www.edx.org/?utm_source=google&utm_campaign=20875889732&utm_medium=cpc&utm_term=edx&gad_source=1&gclid=Cj0KCQjw8--2BhCHARIsAF_w1gxAOYHroozLVQ_axPCaGaI4C6ZhJr-yfJ-PVpzZrzHU2alCk3mKwjgaAnlPEALw_wcB"

        },
        {
            instituicao: "Khan Academy",
            cursosGratuitos: "Matemática, Ciência, História, Economia",
            duracaoEstimada: "Varia",
            cargaHorariaTotal: "Varia",
            ritmoEstudo: "Flexível",
            formato: "Autodidata",
            numeroModulos: "Não aplicável",
            preRequisitos: "Nenhum",
            nivelDificuldade: "Varia",
            reconhecimento: "Organização sem fins lucrativos que oferece educação gratuita de alta qualidade para todos.",
            link: "https://pt.khanacademy.org"
        },
        {
            instituicao: "Microsoft Learn",
            cursosGratuitos: ".NET, Azure, Power BI, AI",
            duracaoEstimada: "Varia",
            cargaHorariaTotal: "Varia",
            ritmoEstudo: "Flexível",
            formato: "Autodidata com hands-on labs",
            numeroModulos: "Varia",
            preRequisitos: "Conhecimento básico de programação",
            nivelDificuldade: "Varia",
            reconhecimento: "Plataforma oficial da Microsoft para aprendizado de tecnologias Microsoft.",
            link: "https://learn.microsoft.com/pt-br/training/"
        },
        {
            instituicao: "Google Developers",
            cursosGratuitos: "Android Development, Web Fundamentals, Cloud Platform",
            duracaoEstimada: "Varia",
            cargaHorariaTotal: "Varia",
            ritmoEstudo: "Flexível",
            formato: "Autodidata com codelabs",
            numeroModulos: "Varia",
            preRequisitos: "Conhecimento básico de programação",
            nivelDificuldade: "Varia",
            reconhecimento: "Plataforma oficial do Google para desenvolvedores, oferecendo cursos gratuitos de alta qualidade.",
            link: "https://developers.google.com/?hl=pt"
        },
        {
            instituicao: "Platzi",
            cursosGratuitos: "Desenvolvimento Web, Design UI/UX, Marketing Digital",
            duracaoEstimada: "4-8 semanas por curso",
            cargaHorariaTotal: "Varia por curso",
            ritmoEstudo: "Flexível",
            formato: "Videoaulas, projetos práticos, comunidade",
            numeroModulos: "Varia por curso",
            preRequisitos: "Conhecimento básico de computadores",
            nivelDificuldade: "Iniciante a avançado",
            reconhecimento: "Plataforma latino-americana com foco em cursos práticos e projetos reais.",
            link: "https://platzi.com.br/cursos/"
        },
        {
            instituicao: "Udemy",
            cursosGratuitos: "Programação, Marketing, Design, Negócios",
            duracaoEstimada: "Varia muito",
            cargaHorariaTotal: "Varia muito",
            ritmoEstudo: "Flexível",
            formato: "Videoaulas, recursos adicionais",
            numeroModulos: "Varia muito",
            preRequisitos: "Varia por curso",
            nivelDificuldade: "Varia muito",
            reconhecimento: "Uma das maiores plataformas de cursos online do mundo, com milhões de alunos.",
            link: "https://www.udemy.com/course/science-of-stress-essentials-of-teenage-health/?gad_source=1"
        },
        {
            instituicao: "Senai",
            cursosGratuitos: "Cursos técnicos em diversas áreas",
            duracaoEstimada: "Varia de acordo com o curso",
            cargaHorariaTotal: "Varia de acordo com o curso",
            ritmoEstudo: "Semipresencial",
            formato: "Aulas teóricas e práticas em laboratório",
            numeroModulos: "Varia de acordo com o curso",
            preRequisitos: "Ensino médio completo",
            nivelDificuldade: "Varia de acordo com o curso",
            reconhecimento: "Serviço Nacional de Aprendizagem Industrial, referência em cursos técnicos.",
            link: "https://www.sp.senai.br/cursos"
        },
        {
            instituicao: "EBAC Online",
            cursosGratuitos: "Design, Programação, Data Science, Marketing, Games, Negócios",
            duracaoEstimada: "Varia de acordo com o curso (em média, 3 a 6 meses)",
            cargaHorariaTotal: "Varia de acordo com o curso",
            ritmoEstudo: "Flexível",
            formato: "Videoaulas, projetos práticos, comunidade online",
            numeroModulos: "Varia de acordo com o curso",
            preRequisitos: "Conhecimento básico de informática",
            nivelDificuldade: "Iniciante a avançado",
            reconhecimento: "Plataforma brasileira com cursos práticos e projetos reais, focada em áreas criativas e tecnológicas.",
            link: "https://www.ebaconline.com.br/cursos?utm_source=google&utm_medium=cpc&utm_campaign=course_0_all_google_perf-max_all_conversions_all&utm_content=c_20157410283%7Cadg_%7Cad_%7Cph_%7Ckey_%7Cdev_c%7Cpst_%7Crgnid_9100628%7Cplacement_&gad_source=1&gclid=Cj0KCQjw8--2BhCHARIsAF_w1gw1XC9xKQ0JkWdTSKGvs9wjBRKuWfKqa4ivoFFl3cc0ESbhI00YxewaAlPOEALw_wcB"
        },
        {
            instituicao: "MIT OpenCourseWare",
            cursosGratuitos: "Ciência da Computação, Engenharia, Matemática, Humanidades",
            duracaoEstimada: "Varia de acordo com o curso",
            cargaHorariaTotal: "Varia de acordo com o curso",
            ritmoEstudo: "Flexível",
            formato: "Materiais de aula, vídeos, exercícios",
            numeroModulos: "Varia de acordo com o curso",
            preRequisitos: "Conhecimento em inglês",
            nivelDificuldade: "Universitário",
            reconhecimento: "Plataforma do Instituto de Tecnologia de Massachusetts com cursos universitários gratuitos.",
            link: "https://ocw.mit.edu/search/?s=department_course_numbers.sort_coursenum"
        },
        {
            instituicao: "HarvardX",
            cursosGratuitos: "Humanidades, Ciências Sociais, Negócios, Saúde",
            duracaoEstimada: "Varia de acordo com o curso",
            cargaHorariaTotal: "Varia de acordo com o curso",
            ritmoEstudo: "Flexível",
            formato: "Videoaulas, exercícios, projetos",
            numeroModulos: "Varia de acordo com o curso",
            preRequisitos: "Conhecimento em inglês",
            nivelDificuldade: "Universitário",
            reconhecimento: "Plataforma da Universidade de Harvard com cursos universitários gratuitos.",
            link: "https://online.hbs.edu/courses/?c1=AD_GAW_SE_NW&gad_source=1&gclid=Cj0KCQjw8--2BhCHARIsAF_w1gzssFMpqggWHMrqMkryQxea_ew1XgFSFNnQnT70HKfImqNppUVLtNwaAvKWEALw_wcB"
        }
];