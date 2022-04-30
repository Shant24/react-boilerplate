import { memo, MouseEvent, useState } from 'react';

import { useLingui } from '@lingui/react';
import { defineMessage, Trans } from '@lingui/macro';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { PagesEnum } from '@appTypes/pages';

import { dynamicActivateLocale } from '@configs/i18n';

const pages = [
  { to: PagesEnum.HOME, text: defineMessage({ message: 'Home' }) },
  { to: PagesEnum.ABOUT, text: defineMessage({ message: 'About us' }) },
];

export const languages = {
  en: 'en',
  ru: 'ru',
  hy: 'hy',
};

export const languageNameList = [
  { label: defineMessage({ message: 'English' }), value: 'en' },
  { label: defineMessage({ message: 'Russian' }), value: 'ru' },
  { label: defineMessage({ message: 'Armenian' }), value: 'hy' },
];

const settings = [
  defineMessage({ message: 'Home' }),
  defineMessage({ message: 'Account' }),
  defineMessage({ message: 'Dashboard' }),
  defineMessage({ message: 'Logout' }),
];

const Header = () => {
  const { i18n } = useLingui();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLanguageChange = (e: SelectChangeEvent<string>) => {
    // eslint-disable-next-line no-console
    console.log('e.target.value', e.target.value);
    dynamicActivateLocale(e.target.value);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography variant="h6" noWrap component="div" sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
            Boilerplate
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map(({ to, text }) => (
                <Link key={text.id} to={to} onClick={handleCloseNavMenu}>
                  <MenuItem>
                    <Typography textAlign="center">{text.id}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>

          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            Boilerplate
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map(({ to, text }) => (
              <Link key={text.id} to={to}>
                <Button sx={{ color: 'white', display: 'block' }}>
                  <Trans id={text.id} />
                </Button>
              </Link>
            ))}
          </Box>

          <Box>
            <Select
              variant="standard"
              sx={{
                mr: 3,
                color: 'white',
                background: 'transparent',

                ':hover': {
                  ':before': { border: 'none !important' },
                  ':after': { border: 'none !important' },
                },
                ':before': { border: 'none !important' },
                ':after': { border: 'none !important' },

                svg: { path: { fill: 'white' } },
                '.MuiInput-input.MuiInputBase-input:focus': {
                  backgroundColor: 'transparent',
                },
              }}
              value={i18n.locale}
              onChange={handleLanguageChange}
            >
              {languageNameList.map(({ label, value }) => (
                <MenuItem key={value} value={value}>
                  <Trans id={label.id} />
                </MenuItem>
              ))}
            </Select>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Shant Sargsyan" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              anchorEl={anchorElUser}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting.id} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">
                    <Trans id={setting.id} />
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default memo(Header);
