import React from 'react';
import { Modal, Box, Typography, IconButton, Button, Divider, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';

interface ServiceContent {
  introduction?: string;
  description: string;
  contact?: {
    title?: string;
    text?: string;
    extraServices?: string[];
  };
  typesOfTexts?: {
    title?: string;
    list?: string[];
  };
  tariffs?: {
    title?: string;
    text?: string;
  };
  corrections?: {
    title?: string;
    text?: string;
  };
  revisión?: {
    title?: string;
    text?: string;
  };
}

interface Service {
  name: string;
  content: ServiceContent;
}

interface ServiceModalProps {
  visible: boolean;
  currentService: Service | null;
  closeModal: () => void;
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  maxHeight: '80%',
  bgcolor: 'background.paper',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
  overflowY: 'auto',
  display: 'flex',
  flexDirection: 'column',
};

const ServiceModal: React.FC<ServiceModalProps> = ({ visible, currentService, closeModal }) => {
  return (
    <Modal open={visible} onClose={closeModal} aria-labelledby="modal-title" aria-describedby="modal-description">
      <Box sx={style}>
        {currentService && (
          <>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Typography id="modal-title" variant="h4" component="h2" sx={{ fontSize: '2rem', color: '#1976d2' }}>
                {currentService.name}
              </Typography>
              <IconButton onClick={closeModal} sx={{ color: 'gray' }}>
                X
              </IconButton>
            </Box>
            <Divider sx={{ mb: 3 }} />

            <Typography id="modal-description" variant="body1" sx={{ mb: 3, fontSize: '1.2rem', bgcolor: '#f5f5f5', p: 2, borderRadius: '5px' }}>
                {currentService.content.introduction || 'No introduction available'}
            </Typography>

            <Typography variant="body1" sx={{ mb: 3, fontSize: '1.2rem', bgcolor: '#e3f2fd', p: 2, borderRadius: '5px' }}>
              {currentService.content.description}
            </Typography>

            {currentService.content.contact && (
              <>
                <Typography variant="h5" sx={{ mt: 3, fontSize: '1.5rem', color: '#1976d2' }}>
                  {currentService.content.contact.title}
                </Typography>
                <Typography variant="body1" sx={{ fontSize: '1.2rem', mb: 2 }}>
                  {currentService.content.contact.text}
                </Typography>
                {currentService.content.contact.extraServices && (
                  <List sx={{ mt: 1, pl: 2 }}>
                    {currentService.content.contact.extraServices.map((service, index) => (
                      <ListItem key={index}>
                        <ListItemIcon>
                          
                        </ListItemIcon>
                        <ListItemText primary={service} primaryTypographyProps={{ fontSize: '1.1rem' }} />
                      </ListItem>
                    ))}
                  </List>
                )}
              </>
            )}

            {currentService.content.typesOfTexts && (
              <>
                <Typography variant="h5" sx={{ mt: 3, fontSize: '1.5rem', color: '#1976d2' }}>
                  {currentService.content.typesOfTexts.title}
                </Typography>
                <Box sx={{ mt: 1, pl: 2 }}>
                  {currentService.content.typesOfTexts.list?.map((text, index) => (
                    <Typography key={index} variant="body2" sx={{ mb: 1, fontSize: '1.1rem' }}>
                      - {text}
                    </Typography>
                  ))}
                </Box>
              </>
            )}

            {currentService.content.tariffs && (
              <>
                <Typography variant="h5" sx={{ mt: 3, fontSize: '1.5rem', color: '#1976d2' }}>
                  {currentService.content.tariffs.title}
                </Typography>
                <Typography variant="body1" sx={{ fontSize: '1.2rem', bgcolor: '#e3f2fd', p: 2, borderRadius: '5px' }}>
                  {currentService.content.tariffs.text}
                </Typography>
              </>
            )}

            {currentService.content.corrections && (
              <>
                <Typography variant="h5" sx={{ mt: 3, fontSize: '1.5rem', color: '#1976d2' }}>
                  {currentService.content.corrections.title}
                </Typography>
                <Typography variant="body1" sx={{ fontSize: '1.2rem', mb: 3, bgcolor: '#f5f5f5', p: 2, borderRadius: '5px' }}>
                  {currentService.content.corrections.text}
                </Typography>
              </>
            )}

            {currentService.content.revisión && (
              <>
                <Typography variant="h5" sx={{ mt: 3, fontSize: '1.5rem', color: '#1976d2' }}>
                  {currentService.content.revisión.title}
                </Typography>
                <Typography variant="body1" sx={{ fontSize: '1.2rem', mb: 3, bgcolor: '#e3f2fd', p: 2, borderRadius: '5px' }}>
                  {currentService.content.revisión.text}
                </Typography>
              </>
            )}

            <Box sx={{ mt: 'auto', pt: 3, textAlign: 'center' }}>
              <Button variant="contained" color="primary" onClick={closeModal} sx={{ fontSize: '1.1rem', px: 4 }}>
                Cerrar
              </Button>
            </Box>
          </>
        )}
      </Box>
    </Modal>
  );
};

export default ServiceModal;
