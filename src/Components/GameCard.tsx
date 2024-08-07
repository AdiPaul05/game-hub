import React from "react";
import { Game } from "../hooks/useGames";
import {
  Card,
  CardBody,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent={"space-between"}>
          <VStack align="flex-start">
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />

            <Emoji rating={game.rating_top}></Emoji>
          </VStack>

          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
