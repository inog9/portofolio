import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { faMedium } from '@fortawesome/free-brands-svg-icons';
import { styled } from '@mui/material/styles';
import { Container, Typography, Box, Grid, Card, CardContent, CardMedia, Chip, CircularProgress } from '@mui/material';
import { keyframes } from '@mui/system';

const glow = keyframes`
  0% { box-shadow: 0 0 5px rgba(0, 243, 255, 0.2); }
  50% { box-shadow: 0 0 20px rgba(0, 243, 255, 0.4); }
  100% { box-shadow: 0 0 5px rgba(0, 243, 255, 0.2); }
`;

const StyledContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(8, 2),
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '1px',
    background: 'linear-gradient(90deg, transparent, #00f3ff, transparent)',
    animation: `${glow} 3s infinite`,
  }
}));

const Title = styled(Typography)(({ theme }) => ({
  color: '#fff',
  marginBottom: theme.spacing(6),
  textAlign: 'center',
  fontSize: '3.5rem',
  fontWeight: 800,
  letterSpacing: '-0.03em',
  textShadow: `
    0 0 10px rgba(0, 243, 255, 0.5),
    0 0 20px rgba(0, 243, 255, 0.3),
    0 0 30px rgba(0, 243, 255, 0.2)
  `,
  position: 'relative',
  zIndex: 2,
  '&::before': {
    content: '""',
    position: 'absolute',
    bottom: '-10px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '120px',
    height: '4px',
    background: 'linear-gradient(90deg, transparent, #00f3ff, transparent)',
    borderRadius: '2px',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-15px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '80px',
    height: '2px',
    background: 'linear-gradient(90deg, transparent, #00f3ff, transparent)',
    borderRadius: '1px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '2.5rem',
  }
}));

const ArticleCard = styled(Card)(({ theme }) => ({
  background: 'rgba(0, 243, 255, 0.05)',
  backdropFilter: 'blur(8px)',
  border: '2px solid rgba(0, 243, 255, 0.3)',
  borderRadius: '12px',
  overflow: 'hidden',
  transition: 'all 0.3s ease',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 30px rgba(0, 243, 255, 0.2)',
    borderColor: 'rgba(0, 243, 255, 0.5)',
    '& .MuiCardMedia-root': {
      transform: 'scale(1.05)',
    }
  }
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  height: 200,
  transition: 'transform 0.3s ease',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}));

const CardContentWrapper = styled(CardContent)(({ theme }) => ({
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  padding: theme.spacing(3),
}));

const ArticleTitle = styled(Typography)(({ theme }) => ({
  color: '#fff',
  fontSize: '1.5rem',
  fontWeight: 700,
  letterSpacing: '-0.02em',
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  position: 'relative',
  paddingBottom: theme.spacing(1),
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '40px',
    height: '3px',
    background: 'linear-gradient(90deg, #00f3ff, transparent)',
    borderRadius: '2px',
  },
  '& svg': {
    color: '#00f3ff',
    fontSize: '1.1rem',
    filter: 'drop-shadow(0 0 5px rgba(0, 243, 255, 0.5))',
  }
}));

const ArticleDescription = styled(Typography)(({ theme }) => ({
  color: 'rgba(255, 255, 255, 0.9)',
  fontSize: '1rem',
  lineHeight: 1.7,
  flexGrow: 1,
  display: '-webkit-box',
  WebkitLineClamp: 3,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  position: 'relative',
  padding: theme.spacing(1, 0),
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(180deg, transparent 0%, rgba(0, 243, 255, 0.05) 100%)',
    pointerEvents: 'none',
  }
}));

const TagsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(1),
}));

const Tag = styled(Chip)(({ theme }) => ({
  background: 'rgba(0, 243, 255, 0.1)',
  border: '1px solid rgba(0, 243, 255, 0.2)',
  color: '#00f3ff',
  fontSize: '0.8rem',
  height: '26px',
  transition: 'all 0.3s ease',
  fontWeight: 500,
  '&:hover': {
    background: 'rgba(0, 243, 255, 0.2)',
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 12px rgba(0, 243, 255, 0.15)',
  }
}));

const LinkButton = styled('a')(({ theme }) => ({
  color: '#00f3ff',
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  fontSize: '0.95rem',
  fontWeight: 500,
  transition: 'all 0.3s ease',
  padding: theme.spacing(0.5, 1),
  borderRadius: '4px',
  '&:hover': {
    color: '#fff',
    background: 'rgba(0, 243, 255, 0.1)',
    '& svg': {
      transform: 'translateX(3px)',
      filter: 'drop-shadow(0 0 5px rgba(0, 243, 255, 0.5))',
    }
  },
  '& svg': {
    transition: 'all 0.3s ease',
  }
}));

const DateContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  color: 'rgba(255, 255, 255, 0.8)',
  fontSize: '0.85rem',
  fontWeight: 500,
  '& svg': {
    color: '#00f3ff',
    fontSize: '0.9rem',
    filter: 'drop-shadow(0 0 3px rgba(0, 243, 255, 0.3))',
  }
}));

const LoadingContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '200px',
  '& .MuiCircularProgress-root': {
    color: '#00f3ff',
  }
}));

interface MediumPost {
  title: string;
  description: string;
  thumbnail: string;
  link: string;
  tags: string[];
  pubDate: string;
}

function Project() {
  const [posts, setPosts] = useState<MediumPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMediumPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@inoginn');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.status === 'ok' && data.items && data.items.length > 0) {
          const formattedPosts = data.items.slice(0, 6).map((item: any) => {
            // Extract image from content
            let thumbnail = '';
            if (item.thumbnail) {
              thumbnail = item.thumbnail;
            } else if (item.content) {
              // Try to find image in content
              const imgMatch = item.content.match(/<img[^>]+src="([^">]+)"/);
              if (imgMatch && imgMatch[1]) {
                thumbnail = imgMatch[1];
              }
            }
            
            // If no image found, use default
            if (!thumbnail) {
              thumbnail = 'https://miro.medium.com/max/1400/1*TGH72Nnw24QL3iV9IOm4VA.png';
            }

            return {
              title: item.title,
              description: item.description.replace(/<[^>]*>/g, '').substring(0, 150) + '...',
              thumbnail: thumbnail,
              link: item.link,
              tags: item.categories || ['Technology', 'Programming'],
              pubDate: new Date(item.pubDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })
            };
          });
          setPosts(formattedPosts);
        } else {
          throw new Error('No articles found or invalid response format');
        }
      } catch (error) {
        console.error('Error fetching Medium posts:', error);
        setError(error instanceof Error ? error.message : 'Failed to fetch articles');
      } finally {
        setLoading(false);
      }
    };

    fetchMediumPosts();
  }, []);

  if (loading) {
    return (
      <StyledContainer id="articles">
        <Title variant="h1">Articles</Title>
        <LoadingContainer>
          <CircularProgress />
        </LoadingContainer>
      </StyledContainer>
    );
  }

  if (error) {
    return (
      <StyledContainer id="articles">
        <Title variant="h1">Articles</Title>
        <Typography color="error" align="center">
          {error}
        </Typography>
      </StyledContainer>
    );
  }

  return (
    <StyledContainer id="articles">
      <Title variant="h1">Articles</Title>
      <Grid container spacing={3}>
        {posts.map((post, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ArticleCard>
              <StyledCardMedia
                image={post.thumbnail}
                title={post.title}
              />
              <CardContentWrapper>
                <ArticleTitle>
                  <FontAwesomeIcon icon={faMedium} />
                  {post.title}
                </ArticleTitle>
                <DateContainer>
                  <FontAwesomeIcon icon={faCalendarAlt} />
                  {post.pubDate}
                </DateContainer>
                <ArticleDescription>
                  {post.description}
                </ArticleDescription>
                <TagsContainer>
                  {post.tags.map((tag, tagIndex) => (
                    <Tag
                      key={tagIndex}
                      label={tag}
                      size="small"
                    />
                  ))}
                </TagsContainer>
                <LinkButton href={post.link} target="_blank" rel="noopener noreferrer">
                  Read Article
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                </LinkButton>
              </CardContentWrapper>
            </ArticleCard>
          </Grid>
        ))}
      </Grid>
    </StyledContainer>
  );
}

export default Project; 