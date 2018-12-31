const subscriptionResolvers = {
  activeUsers: {
    subscribe(parent, args, { pubSub }, info) {
      console.log(pubSub);
      let count = 0;

      setInterval(() => {
        count++;
        pubSub.publish('ONLINE_NOTIFICATION', {
          activeUsers: {
            data: count,
            mutation: 'NEW_USER_SIGNED_IN'
          }
        })
      }, 1000);

      return pubSub.asyncIterator('ONLINE_NOTIFICATION')
    }
  }

};

export default subscriptionResolvers;
