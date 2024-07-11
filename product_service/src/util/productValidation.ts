
export const validateProductRequest = (data: any): { isValid: boolean; errors?: string[] } => {
    const errors: string[] = [];

    if (!data.name || !data.description || !data.price) {
        errors.push("Name, description, and price are required fields.");
    }
   if (typeof data.name !== "string") {
        errors.push("Name must be a string.");
    }
    
    if (typeof data.description !== "string") {
        errors.push("Description must be a string.");
    }

    if (typeof data.price !== "number") {
        errors.push("Price must be a number.");
    }

    if (typeof data.stock !== "number" || data.stock < 0) {
        errors.push("Stock must be a non-negative number.");
    }

    return { isValid: errors.length === 0, errors };
}