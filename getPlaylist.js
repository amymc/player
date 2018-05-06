const getId = uri => uri.split('/videos/')[1];

export default channelName => {
  return fetch(
    `https://api.vimeo.com/channels/${channelName}/videos?access_token=b01e6d1ea960f10c41ed22b14baa8c07`
  )
    .then(resp => resp.json())
    .then(({ data }) => {
      data.forEach(item => (item.id = getId(item.uri)));
      return data;
    })
    .catch(error => console.warn(error));
};
