import React from 'react';
// eslint-disable-next-line no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
import {
  Button, Menu, MenuItem, ListItemIcon,
} from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import BuildIcon from '@material-ui/icons/Build';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import setLanguage from './Language';
import useStyles from './Styles';
import onClick from './closeConn';
import manageLogin from './manageLogin';

export default withTranslation()(
  (props: WithTranslation): React.ReactElement<WithTranslation> => {
    setLanguage();
    const classes = useStyles({});

    const { t } = props;
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = (): void => {
      setAnchorEl(null);
    };

    return (
      <>
        <Button aria-controls="simple-menu" aria-haspopup="true" title={t('LoginMenu:title.title')} onClick={handleClick}>
          <PersonIcon className={classes.root} />
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        >
          <MenuItem onClick={manageLogin} title={t('LoginMenu:manage.title')}>
            <ListItemIcon>
              <BuildIcon />
            </ListItemIcon>
            {t('LoginMenu:manage.text')}
          </MenuItem>
          <MenuItem onClick={onClick} title={t('LoginMenu:close.title')}>
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            {t('LoginMenu:close.text')}
          </MenuItem>
        </Menu>
      </>
    );
  },
);
