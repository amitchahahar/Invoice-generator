import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function Login() {
	return (
		<div className='h-screen w-full flex justify-center items-center px-4'>
			<Card className='max-w-md'>
				<CardHeader>
					<CardTitle className='text-2xl'>
						Login
					</CardTitle>
					<CardDescription>
						Enter your Email below to login in to your
						account
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form className='flex flex-col gap-y-8'>
						<div className='flex flex-col gap-y-2'>
							<Label>Email</Label>
							<Input placeholder='abcd@gmail.com' />
						</div>
						<Button>Submit</Button>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}
