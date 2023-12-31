import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://hxkrniybbclqxwvyqcff.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh4a3JuaXliYmNscXh3dnlxY2ZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM5NzE0OTQsImV4cCI6MjAxOTU0NzQ5NH0.FaL7WZmA65hEScsNLXLT1B-tBj_gA3TLcbXJkJd-fzA",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh4a3JuaXliYmNscXh3dnlxY2ZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM5NzE0OTQsImV4cCI6MjAxOTU0NzQ5NH0.FaL7WZmA65hEScsNLXLT1B-tBj_gA3TLcbXJkJd-fzA"
    }
})