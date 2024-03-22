import { createFileRoute } from '@tanstack/react-router';
import Infinite from '../../pages/Cats/Infinite';

export const Route = createFileRoute('/cats/infinite')({
  component: Infinite,
});
