import HomeIcon from '@mui/icons-material/Home';
import EventNoteIcon from '@mui/icons-material/EventNote';
import MapIcon from '@mui/icons-material/Map';
import QuizIcon from '@mui/icons-material/Quiz';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import InfoIcon from '@mui/icons-material/Info';

export const mainNavBarItems = [
    {
        id : 'grand_menu.app_menu',
        children : [
            {
                id: 0,
                icon: <HomeIcon />,
                label: 'menu.accueil',
                active : true,
                route: 'accueil',
            },
            {
                id: 1,
                icon: <EventNoteIcon />,
                label: 'menu.agenda',
                route: 'agenda',
            },
            {
                id: 2,
                icon: <MapIcon />,
                label: 'menu.carte',
                route: 'carte',
            },
            {
                id: 3,
                icon: <NewspaperIcon />,
                label: 'menu.dossier_presse',
                route: 'presse',
            }
        ],
        
    },
    {
        id : 'grand_menu.question',
        children : [
            {
                id: 4,
                icon: <QuizIcon />,
                label: 'menu.faq',
                route: 'faq',
            },
            {
                id: 5,
                icon: <InfoIcon />,
                label: 'menu.a_propos',
                route: 'apropos',
            }
        ],
    }
]