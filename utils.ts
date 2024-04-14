
export const selectFrom = (payload: string[]) => {
    const index = Math.floor(Math.random() * payload.length);
    return payload[index];
  };