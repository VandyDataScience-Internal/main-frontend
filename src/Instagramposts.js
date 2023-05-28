import React, { useEffect, useState } from 'react';

function InstaPosts() {

  //the instagram feed used
  const [feed, setFeed] = useState([]);

  //Gets all instagram posts of a given user, and adds it to feed
  const GetInstaPosts = async () => {
    //the access token that determines the account accessed
    const access_token = 'IGQVJYdDFYTFlkMXY4TF9tdzlOeUpFTkNHRzExMXR4NDAxei1kYlo2NUVKdlJUY3FqeUZAqcUpha3o5clFaYVVPaUZAiWnBWX0hIMHB5aFBFci00OWxBZAjVnRGhOWmtRXzE0LTRJWWgzNzdWZAnZAPc0VscwZDZD';
    //the field defines all variables that are added as data, each instagram
    //post is an array element with all fields given for that post
    const url = 'https://graph.instagram.com/me/media?' +
      'fields=id,media,media_type,media_url,caption,permalink' +
      '&access_token=' + access_token;
    //attempts to add API data to the feed
    try {
      const data = await fetch(url);
      const posts = await data.json();
      setFeed(posts);
    } catch (err) {
      console.log('Error Caught: ', err);
    }
  };

  useEffect(() => {
    GetInstaPosts();
  }, []);
  //console.log(feed.data)

  return (
    <div className='instaposts' display='table'>
      {feed.data?.map((post) => (
        <div align='center' padding={5}>
          <a href={post.permalink}>
            <img
              id={post.id}
              src={post.media_url}
              alt={post.caption}
              width='30%'
            />
          </a>
          <p>
            {post.caption}
          </p>
        </div>
      ))}
    </div>
  );
}

export default InstaPosts;