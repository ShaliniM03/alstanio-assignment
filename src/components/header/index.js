import {useState} from 'react';
import {createStyles, Header, Container,Group,Anchor,Title } from '@mantine/core';

const HEADER_HEIGHT = 84;

const useStyles = createStyles((theme) => ({
  header:{
    marginBottom:1,
    color:'white'
  },
  inner: {
    height: HEADER_HEIGHT,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom:1
  },

  links: {
    height: HEADER_HEIGHT,
    display: 'flex',

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  mainLinks: {
    marginRight: -theme.spacing.sm,
  },

  mainLink: {
    textTransform: 'uppercase',
    fontSize: 13,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[6],
    padding: `7px ${theme.spacing.sm}px`,
    fontWeight: 700,
    transition: 'border-color 100ms ease, color 100ms ease',

    '&:hover': {
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      textDecoration: 'none',
    },
  },

  mainLinkActive: {
    '&, &:hover': {
      color:'white'
    },
  },
}));


const Headers=() =>{
  const { classes, cx } = useStyles();
  const [active, setActive] = useState(0);

  const mainLinks=[{
    link:'/',
    label:'Users'
  }
]

  const mainItems = mainLinks.map((item, index) => (
    <Anchor
      href={item.link}
      key={item.label}
      className={cx(classes.mainLink, { [classes.mainLinkActive]: index === active })}
      onClick={(event) => {
        event.preventDefault();
        setActive(index);
      }}
    >
      {item.label}
    </Anchor>
  ));

  return (
    <Header height={HEADER_HEIGHT} bg='#353669'>
      <Container className={classes.inner}>
        <Title order={2} c='white' fw={700}>alstonia.</Title>
        <div className={classes.links}>
          <Group spacing={0} position="right" className={classes.mainLinks}>
            {mainItems}
          </Group>
        </div>
      </Container>
    </Header>
  );
}

export default Headers;