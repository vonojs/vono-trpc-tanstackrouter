import type { AppRouter } from '~/server/router';
import { createTRPCReact } from '@trpc/react-query';
 
export const trpc = createTRPCReact<AppRouter>();

