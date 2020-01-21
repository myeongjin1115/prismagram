export const USER_FRAGMENT = `
    fragment UserParts on User {
        username
        email
        firstName
        lastName
        bio
        posts {
        id
            caption
        }
    }
`;
