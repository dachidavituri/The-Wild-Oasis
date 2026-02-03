import UpdateProfileForm from "../../_components/UpdateProfileForm";
import SelectCountry from "../../_components/SelectCountry";

export const metadata = {
  title: "Update Profile",
};

export default function Page() {
  const nationality = "portugal";
  const countryFlag = "pt.jpg";
  return (
    <div>
      <h2 className="font-semibold text-2xl text-orange-300 mb-4">
        Update your guest profile
      </h2>

      <p className="text-lg mb-8 text-white">
        Providing the following information will make your check-in process
        faster and smoother. See you soon!
      </p>
      <UpdateProfileForm>
        <SelectCountry
          name="nationality"
          id="nationality"
          className="px-5 py-3 bg-gray-600 text-white w-full shadow-sm rounded-sm"
          defaultCountry={nationality}
        />
      </UpdateProfileForm>
    </div>
  );
}
