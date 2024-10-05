import { useState } from 'react';
import { Box, Flex, Text, Image, VStack, Collapse, IconButton } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';

interface Role {
  companyImage: string;
  companyName: string;
  roleName: string;
  datesInvolved: string;
  details: string;
}

interface ExperienceTimelineProps {
  roles: Role[];
}

const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ roles }) => {
    return (
    <>
        
    </>
    );
};

export default ExperienceTimeline;
