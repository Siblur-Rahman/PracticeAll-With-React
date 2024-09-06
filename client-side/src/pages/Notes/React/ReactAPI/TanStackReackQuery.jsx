import Blog from "../../../../shared/Blog";

const TanStackReackQuery = () => {
    return (
        <div>
            <Blog
            npmCode={'npm i @tanstack/react-query'}
            topic={'TanStack/Reack-Query'}
            url={'https://tanstack.com/query/latest/docs/framework/react/overview'}
            time={'67-4 4:50, 67-5 csm11-last 1:15:10 p-3, csm-12-day-1 5:50 p-3 '}
            code={`
TanStack Query ডেটা ফেচিং এবং সিঙ্ক্রোনাইজেশনের জন্য একটি জনপ্রিয় লাইব্রেরি। 
এর মধ্যে "mutation" একটি গুরুত্বপূর্ণ কনসেপ্ট যা মূলত সার্ভার ডেটা পরিবর্তনের জন্য ব্যবহৃত হয়।
Mutation-এর কাজ:
- ডেটা পরিবর্তন করা: যেকোনো ক্রিয়াকলাপ যা ডেটা পরিবর্তন করে যেমন তৈরি করা, 
আপডেট করা বা ডিলিট করা, তা mutation দ্বারা করা হয়।
- অপ্টিমিস্টিক আপডেট: ক্লায়েন্ট সাইডে ইন্সট্যান্ট আপডেট দেখানো হয়, 
ফলে ইউজার ইন্টারফেস তাৎক্ষণিক প্রতিক্রিয়া দেয়।
- অটোমেটিক রিফ্রেশ: যখন mutation সফলভাবে সম্পন্ন হয়, তখন সংশ্লিষ্ট 
query গুলো অটোমেটিক রিফ্রেশ হয় যাতে ইউজার সবসময় আপডেটেড ডেটা দেখতে পায়।
Mutation ব্যবহার করার জন্য কিছু স্টেপ:
1. useMutation Hook: এই হুক ব্যবহার করে আপনি একটি mutation তৈরি করতে পারেন।
2. mutate Function: এটি mutation ট্রিগার করার জন্য ব্যবহৃত হয়।
3. onSuccess এবং onError Callbacks: সফল বা ব্যর্থ হলে কী হবে তা নির্ধারণ করতে।
উদাহরণ:
import { useMutation, useQueryClient } from '@tanstack/react-query';
// ডেটা আপডেট করার ফাংশন
const updateData = async (newData) => {
const response = await fetch('/api/data', {
method: 'POST',
body: JSON.stringify(newData),
});
return response.json();
};
function MyComponent() {
const queryClient = useQueryClient();
const mutation = useMutation(updateData, {
onSuccess: () => {
// যখন mutation সফলভাবে সম্পন্ন হবে, তখন query রিফ্রেশ করা
queryClient.invalidateQueries('data');
},
});
return (
<div>
<button
onClick={() => {
mutation.mutate({ id: 1, value: 'Updated value' });
}}
>
Update Data
</button>
{mutation.isLoading ? 'Updating...' : null}
{mutation.isError ? 'Error updating data' : null}
{mutation.isSuccess ? 'Data updated successfully' : null}
</div>
);
}
এখানে, useMutation হুকটি ব্যবহৃত হয়েছে updateData ফাংশনকে মিউটেশন হিসেবে ব্যবহারের জন্য। 
mutation.mutate ফাংশনটি ট্রিগার করলে ডেটা আপডেট হবে এবং সফল হলে সংশ্লিষ্ট query গুলো রিফ্রেশ হবে।
এইভাবে, TanStack Query-তে মিউটেশন ব্যবহার করে আপনি সার্ভার সাইড ডেটা ম্যানিপুলেশন করতে পারবেন 
এবং ইউজার ইন্টারফেসে তাৎক্ষণিক ফিডব্যাক দিতে পারবেন।
            `}
            />
            <Blog
            topic={'Code with Chatgpt'}
            url={'https://chatgpt.com/share/25735c4c-e856-416f-ac6a-b6177d001088?fbclid=IwZXh0bgNhZW0CMTAAAR3m8si5N4avfjix4jknOVwoozrSvDUtw4oQXriXM7Jjem-TWiZNlPw07PQ_aem_AYarG_Niw4zteeRvqJn4jsdc-xSWHbBG31NvIqz79BGDPmjff14R4Gux434Loa4RyTyVviKnpbAQPKGwErnGrFse'}
            />
        </div>
    );
};

export default TanStackReackQuery;