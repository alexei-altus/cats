import { createFileRoute } from '@tanstack/react-router';
import Cats from '../../pages/Cats';

export const Route = createFileRoute('/cats/')({
  component: Cats,
});