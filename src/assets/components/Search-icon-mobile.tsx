import { IconButton, Search2Icon, Input, InputRightElement, InputGroup } from "@chakra-ui/icons";
import { Menu, MenuButton, MenuList, MenuItem, Box} from "@chakra-ui/react";
import FocusLock from 'react-focus-lock';

export default function MobileSearch() {
    return(
        <Box w={"100%"}>
            <Menu isLazy>
                <MenuButton float={"right"} marginRight={"15px"}>
                <IconButton colorScheme={"inherit"} color={"black"} aria-label="search" 
                icon={<Search2Icon fontSize={"3xl"} />} borderRadius={"50px"} />
                </MenuButton>
                <MenuList>
                    <MenuItem>
                    <FocusLock returnFocus persistentFocus={false}>
                        <InputGroup size={"lg"}>
                            <Input placeholder="Search disease by name" />
                            <InputRightElement width={"4.5rem"}>
                                <IconButton colorScheme={"brand.vividpink"} color={"brand.vividazure"} aria-label="search" 
                                icon={<Search2Icon />} />
                            </InputRightElement>
                        </InputGroup>
                        </FocusLock>
                    </MenuItem>
                </MenuList>
            </Menu>
        </Box>
    )
}