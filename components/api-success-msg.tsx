import { Alert, Box, Collapse, IconButton } from "@mui/material";
import { X } from "lucide-react";

export const ApiSuccessMsg = ({
  messages,
  closeAlert,
  open,
}: {
  messages: string[];
  closeAlert: () => void;
  open: boolean;
}) => {
  if (messages.length <= 0) {
    return null;
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Collapse in={open}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                closeAlert();
              }}
            >
              <X fontSize="small" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          {messages[0]}
        </Alert>
      </Collapse>
    </Box>
  );
};
