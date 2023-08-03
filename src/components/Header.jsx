import React from 'react'
import { Box, Image, Flex, Spacer, HStack, Button } from '@chakra-ui/react'

export default function Header() {
  return (
    <div>
        <Flex align="center" p={4} color="white" position="relative">
           <HStack spacing={4} align="center" w="100%">
            <Image src="https://st3.depositphotos.com/3102027/15382/i/600/depositphotos_153825332-stock-photo-tree-landscape-banner.jpg" alt="Imagen de encabezado" w="700px" h="100%" css={{ outline: 'none' }} />
            <Spacer />
          </HStack>
          <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        textAlign="center"
        fontSize="28px"
        fontWeight="bold"
        textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)"
        color="white"
      >
        Arbol de la vida
        <HStack spacing={2} mt={4} justifyContent="center">
          <Button
            border="4px solid"
            borderColor="white.600"
            bg="transparent"
            color="white.300"
            _hover={{ bg: 'gray', color: 'green.300' }}
          >
            Ver Detalles
          </Button>
          <Button
            border="4px solid"
            borderColor="white.600"
            bg="transparent"
            color="white.300"
            _hover={{ bg: 'gray', color: 'green.300' }}
          >
            Ver Video
          </Button>
        </HStack>
      </Box>
        </Flex>
    </div>
  )
}
