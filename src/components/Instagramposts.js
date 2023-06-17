import React, {useEffect, useState} from 'react';
import {
    Card, CardHeader, CardBody, CardFooter,
    Text,
    SimpleGrid,
    Image,
    Link,
} from '@chakra-ui/react';

function InstaPosts() {

    //the instagram feed used
    const [feed, setFeed] = useState([]);

    //Gets all instagram posts of a given user, and adds it to feed
    const GetInstaPosts = async () => {
        //the access token that determines the account accessed
        //until the backend is implemented, this must be added manually
        const access_token = '';
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
        <SimpleGrid
            spacing={10}
            margin={15}
            z-Index={-100}
            alignItems="center"
            templateColumns='repeat(auto-fill, minmax(300px, 1fr))'>
            {feed.data?.map((post) => (
                <Link href={post.permalink} _hover={{
                    transform: 'scale(1.01)',
                    transitionTimingFunction: 'ease-in-out',
                }}>
                    <Card overflow='hidden' borderWidth='1px' borderColor='black' borderRadius='lg'>

                        <Image w='100vh'
                               id={post.id}
                               src={post.media_url}
                               alt={post.caption}
                        />
                        <CardBody>
                            <Text margin={2}>
                                {post.caption}
                            </Text>
                        </CardBody>
                    </Card>
                </Link>
            ))}
        </SimpleGrid>
    )
        ;
}

// {post.media_type="VIDEO" ? (
//     <Image w='100vh'
//            id={post.id}
//            src={post.media_url}
//            alt={post.caption}
//     />
// ) : (
//     <Video w='100vh'
//            id={post.id}
//            src={post.media_url}
//            alt={post.media_type}
//     />
// )

export default InstaPosts;