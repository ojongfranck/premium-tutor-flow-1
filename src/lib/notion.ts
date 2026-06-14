import { Client } from '@notionhq/client';

// Note: This should only be used on the server-side to keep your NOTION_TOKEN secure.
// In a Vite environment, you would typically call an API route/Serverless function 
// which then uses this client to interact with Notion.

export const notion = new Client({
  auth: 'VITE_NOTION_TOKEN', // This will be replaced by actual token in production
});

export const DATABASE_ID = 'VITE_NOTION_DATABASE_ID';

export async function submitToNotion(data: any) {
  try {
    const response = await notion.pages.create({
      parent: { database_id: DATABASE_ID },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: data.fullName,
              },
            },
          ],
        },
        Email: {
          email: data.email,
        },
        WhatsApp: {
          phone_number: data.whatsapp,
        },
        TriedBefore: {
          select: {
            name: data.triedBefore,
          },
        },
        Reason: {
          rich_text: [
            {
              text: {
                content: data.reason,
              },
            },
          ],
        },
        Struggle: {
          rich_text: [
            {
              text: {
                content: data.biggestStruggle,
              },
            },
          ],
        },
        Serious: {
          select: {
            name: data.isSerious,
          },
        },
        Timestamp: {
          date: {
            start: new Date().toISOString(),
          },
        },
      },
    });
    return response;
  } catch (error) {
    console.error('Notion Submission Error:', error);
    throw error;
  }
}
