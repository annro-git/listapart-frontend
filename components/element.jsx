import { ClockFading, ThumbsDown, ThumbsUp, X } from "lucide-react"
import { Card, CardContent } from "./ui/card"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./ui/select"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog'
import { Button } from "./ui/button"
import { Input } from "./ui/input"

const Element = ({ name }) => {
  return (
    <Card className="w-full">
      <CardContent className="w-full">
        <div className="flex items-center justify-between">
          <h2>{name}</h2>
          <div className="flex items-center gap-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button>Delete</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete your
                    account and remove your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
            <Button>Update</Button>
          </div>
        </div>
        <hr className="my-4" />
        <div className="flex gap-4 flex-col md:flex-row">
          <div className="w-full flex gap-2 items-center">
            <p className="w-1/3">Arrival</p>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select a condition" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Condition</SelectLabel>
                  <SelectItem value="Good"><ThumbsUp /> Good</SelectItem>
                  <SelectItem value="Used"><ClockFading /> Used</SelectItem>
                  <SelectItem value="Bad"><ThumbsDown /> Bad</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="w-full flex gap-2 items-center">
            <p className="w-1/3">Departure</p>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select a condition" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Condition</SelectLabel>
                  <SelectItem value="Good"><ThumbsUp /> Good</SelectItem>
                  <SelectItem value="Used"><ClockFading /> Used</SelectItem>
                  <SelectItem value="Bad"><ThumbsDown /> Bad</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div>
          <div>
            <p>Owner</p>
            <Input />
          </div>
          <div>
            <p>Renter</p>
            <Input />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
export default Element