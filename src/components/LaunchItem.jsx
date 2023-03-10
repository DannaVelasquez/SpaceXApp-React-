import { Box, Flex, Text, Spacer, Tag, Button, Icon} from "@chakra-ui/react";
import { HiCalendar } from "react-icons/hi";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import "dayjs/locale/es";

export function LaunchItem(launch){
    return(
        <Box bg="blue.100" p={4} m={4} borderRadius="xl">
            <Flex>
              <Text fontSize="2xl">
                Mission <strong>{launch.mission_name}</strong> ({launch.launch_year})
              </Text>
              <Spacer />
              <Tag p={2} colorScheme={launch.launch_success ? "green" : "red"}>
                {launch.launch_success ? "Success" : "Failure"}
              </Tag>
            </Flex>
            
            <Flex align="center">
              <Icon as={HiCalendar} color="gray.500" />
              <Text fontSize="sm" ml={1} color="gray.500">
                {dayjs(launch.launch_date_local).locale("es").format("D MMMM, YYYY")}
              </Text>
            </Flex>

            <Link to={`/launch/${launch.flight_number}`}>
            <Button mt={2} colorScheme="blue">
                More Details
            </Button>
            </Link>
          </Box>
    );
}