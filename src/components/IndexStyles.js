export default {
  modalOverlay: {
    composes: 'modal-overlay',
    zIndex: '1002',
    display: 'block',
    opacity: '0.5'
  },
  modal: {
    composes: 'modal',
    zIndex: '1003',
    display: 'block',
    top: '10%'
  },
  eventCard: {
    composes: 'card hoverable',
    minHeight: '350px'
  },
  eventCardImgContainer: {
    composes: 'card-image',
    background: 'url(https://cdn.evbstatic.com/s3-build/perm_001/ba7ef6/django/images/discovery/default_logos/2.png)',
    backgroundSize: 'contain',
    height: '162px'
  },
  eventCardTitle: {
    composes: 'card-title',
    width: '100%'
  },
  eventCardImg: {
    objectFit: 'cover',
    height: '100%',
    width: '100%'
  },
  showEventImg: {
    composes: 'z-depth-1',
    maxWidth: '100%',
    width: 'auto'
  },
  addEventImgWrapper0: {
    composes: 'col row s12',
    padding: '0',
    marginBottom: '0'
  },
  addEventImgWrapper1: {
    composes: 'card col s3',
    height: '75px',
    padding: '0 !important'
  },
  addEventImg: {
    objectFit: 'cover',
    height: '100%',
    width: '100%'
  }
}