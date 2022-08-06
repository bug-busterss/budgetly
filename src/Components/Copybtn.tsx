import { ActionIcon, CopyButton, Tooltip } from '@mantine/core';
import { IconCheck, IconCopy } from '@tabler/icons';

const Copybtn = ({ devemail }: { devemail: string }) => {
  return (
    <div>
      <CopyButton value={devemail} timeout={2000}>
        {({ copied, copy }) => (
          <Tooltip
            label={copied ? 'Copied' : 'Copy'}
            withArrow
            position='right'
          >
            <ActionIcon color={copied ? 'teal' : 'gray'} onClick={copy}>
              {copied ? <IconCheck size={16} /> : <IconCopy size={16} />}
            </ActionIcon>
          </Tooltip>
        )}
      </CopyButton>
    </div>
  );
};

export default Copybtn;
