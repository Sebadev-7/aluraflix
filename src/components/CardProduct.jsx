

export const CardProduct = ({ image, title, price }) => {
    return (
        <div className="border p-2 w-48">
        <img src={image} alt={title} className="w-full h-32 object-contain" />
        <h3 className="font-medium text-sm mt-1">{title}</h3>
        <p className="text-gray-700 text-xs mt-1">${price}</p>
      </div>
    );
  };
  
