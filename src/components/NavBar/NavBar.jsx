import React from 'react'
import {
  Group,
  Button,
  Divider,
  Box,
  Burger,
  Drawer,
  ScrollArea,
  rem,
  useMantineTheme,
  Title
} from '@mantine/core';

import { Link, useNavigate } from 'react-router-dom';

import { useDisclosure } from '@mantine/hooks';
import classes from './HeaderMegaMenu.module.css';
import { Pill } from 'lucide-react';

function NavBar() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();
  const historino = useNavigate();
  
  return (
    <Box pb={10}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div style={{ color: theme.primaryColor[0] ,display: "flex", alignItems: "center", gap: "5px"}}>
            <Pill size={30} ></Pill>
            <Title order={2}>Pills4U</Title>
          </div>
        </Link>
          <Group h="100%" gap={0} visibleFrom="sm">
            
            <Link to="Home" className={classes.link}>
              Home
            </Link>
          </Group>

          <Group visibleFrom="sm">
            <Button variant="default" onClick={() => historino("/login")} >Log in</Button>
            <Button onClick={() => historino("/register")} >Sign up</Button>
          </Group>

          <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />

          <a href="#" className={classes.link}>
            Home
          </a>
          <a href="#" className={classes.link}>
            Learn
          </a>
          <a href="#" className={classes.link}>
            Academy
          </a>

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Button variant="default">Log in</Button>
          </Link>
            <Button>Sign up</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  )
}

export default NavBar